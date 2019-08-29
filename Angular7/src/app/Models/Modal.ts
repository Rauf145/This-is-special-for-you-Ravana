import { Device } from "./Device";

export class Modal {
  public open: boolean;
  public model: Device;
  public openAdd: boolean;
  public openNewDriver: boolean;

  openModal(device){
    this.open = true;
    this.model = device;
  }

  closeModal(){
    this.open = false;
    this.model = null;
  }

  openAddModal()
  {
    this.openAdd=true;
  }
  closeAddModal(){
    this.openAdd = false;
  }
  openNewDriverModal()
  {
    this.openNewDriver=true;
  }
  closeNewDriverModal(){
    this.openNewDriver = false;
  }
}
