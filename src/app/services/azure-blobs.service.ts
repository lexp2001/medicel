import { Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class AzureBlobs {

  accountName = "ngblobsaccount"
  containerName = "pictures"

  constructor() { }

  public async listImages(): Promise<string[]> {
    let result: string[] = []

    let blobs = this.containerClient().listBlobsFlat();
    for await (const blob of blobs) {
      result.push(blob.name)
    }
    return result;
  }

  public donwloadImage(name: string, handler: (blob: Blob) => void) {
    const blobClient = this.containerClient().getBlobClient(name);
    blobClient.download().then(resp => {
      resp.blobBody?.then(blob => {
        handler(blob)
      })
    })
  }

  public deleteImage(sas: string, name: string, handler: () => void) {
    this.containerClient(sas).deleteBlob(name).then(() => {
      handler()
    })
  }

  public uploadImage(sas: string, content: Blob, name: string, handler: () => void) {
    const blockBlobClient = this.containerClient(sas).getBlockBlobClient(name);
    blockBlobClient
      .uploadData(content, { blobHTTPHeaders: { blobContentType: content.type } })
      .then(() => handler())
  }

  private containerClient(sas?: string): ContainerClient {
    let token = "sp=racwdl&st=2021-08-24T21:32:50Z&se=2023-01-01T05:32:50Z&spr=https&sv=2020-08-04&sr=c&sig=WHheDgFG%2F%2FUMMULVeGS2SAMjpomHyIBFh1lvMEscTOY%3D"

    if (sas) {
      token = sas;
    }
    return new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net?${token}`)
      .getContainerClient(this.containerName);
  }

}