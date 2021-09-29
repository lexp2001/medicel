import { BlobServiceClient, StorageSharedKeyCredential, BlobDownloadResponseModel } from "@azure/storage-blob";

export async function main() {

  const account = "medicelblobs";
  const accountKey = "P/L7kes2ERV51jyjBZQuuNJxR5WoppNh508cOu87vRpTrqe+ZC8MkSKP/iuIPPQwdFnyWoC8/K/29gyqBDYlIg==";

  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  // List containers
  const blobServiceClient = new BlobServiceClient(
    // When using AnonymousCredential, following url should include a valid SAS or support public access
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential
  );

  let i = 1;
  for await (const container of blobServiceClient.listContainers()) {
    console.log(`Container ${i++}: ${container.name}`);
  }

  const containerName = "imgs";
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Create a blob
  const content = "hello, 你好";
  const blobName = "newblob" + new Date().getTime();
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(content, Buffer.byteLength(content));
  console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);

  // List blobs
  i = 1;
  for await (const blob of containerClient.listBlobsFlat()) {
    console.log(`Blob ${i++}: ${blob.name}`);
  }

}

main().catch((err) => {
  console.error("Error running sample:", err.message);
});
