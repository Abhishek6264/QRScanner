import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions  } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // eslint-disable-next-line @typescript-eslint/ban-types
  scannedBarCode: {};
  options: BarcodeScannerOptions;

  constructor(
    private scanner: BarcodeScanner,

    ) {

    this.options = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

  }

  scanQRcode(){
    this.options = {
      prompt : 'Scan your barcode'
    };
    this.scanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData.text);
      this.scannedBarCode = barcodeData;
    });
  }



  }
