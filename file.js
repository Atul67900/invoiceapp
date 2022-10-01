// Invoice date default 
console.log("checking");

showInvoices();
// Navigation Funtionality
function dashboard() {
    window.location.reload();
}
function newInvoice() {
    let newInvoice = document.querySelector(".newInvoice");
    let dashboardarea = document.querySelector(".dashboard-area");
    let createarea = document.querySelector(".create-area");
    let invoiceListArea = document.querySelector(".invoice-list-main");
    dashboardarea.style.display = "none";
    invoiceListArea.style.display = "none";
    createarea.style.display = "block"
    newInvoice.setAttribute('id', 'actives')

    let Dashboard = document.querySelector(".Dashboard");
    let invoiceList = document.querySelector(".invoiceList");

    Dashboard.setAttribute('id', "");
    invoiceList.setAttribute('id', "");
}
function invoiceList() {
    let invoiceList = document.querySelector(".invoiceList");
    let dashboardarea = document.querySelector(".dashboard-area");
    let createarea = document.querySelector(".create-area");
    let invoiceListArea = document.querySelector(".invoice-list-main");
    
    dashboardarea.style.display = "none";
    createarea.style.display = "none";
    invoiceListArea.style.display = "block";
    invoiceList.setAttribute('id', 'actives')
    
    let Dashboard = document.querySelector(".Dashboard");
    let newInvoice = document.querySelector(".newInvoice");

    Dashboard.setAttribute('id', "");
    newInvoice.setAttribute('id', "");
}





updatedate();

function updatedate() {
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    currentDate = (currentDate < 10 ? "0" : "") + currentDate;
    currentMonth = (currentMonth < 10 ? "0" : "") + currentMonth;

    let allDate = (currentDate + "-" + currentMonth + "-" + currentYear)
    // console.log(allDate);

    document.getElementById("invoiceDateAuto").value = allDate;
}




let addedSrNo = 1;


setInterval(() => {
    update();
}, 1000);


setInterval(() => {
    calculate();
}, 1000);


function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}





// To add More Rows in product area


let addRows = document.getElementById("addRows");
addRows.addEventListener('click', () => {
    let addRow = document.getElementById("addRow");
    let string = `
                        <div class="item-details-area-inputs">
                            <div class="sr-col"><input type="number" style="text-align: center;" value="0${addedSrNo + 1}">
                            </div>
                            <div class="description-col"><input type="text" list="items" class="description" id="description${addedSrNo + 1}">
                            <datalist id="items">
                                <option value="Item 1">
                                <option value="Item 2">
                                <option value="Item 3">
                                <option value="Item 4">
                            </datalist></div>
                            <div class="qty-col"><input type="number" class="quantities" style="text-align: center;" id="qty${addedSrNo + 1}"></div>
                            <div class="unit-col"><select class="units" id="unit${addedSrNo + 1}">
                                    <option>Pcs</option>
                                    <option>Kgs</option>
                                    <option>Ltr</option>
                                    <option>Pair</option>
                                    <option>Dozen</option>
                                </select></div>
                            <div class="rate-col"><input type="number" class="rates" style="text-align: center;" class="amounts" id="rate${addedSrNo + 1}"></div>
                            <div class="amt-col amounts" style="text-align: right; border: 1px solid #000; padding: 0 10px;" class="amt" id="amount${addedSrNo + 1}">00</div>
                            <button class="btn btn-sm btn-danger deleteRow">-</button>
                        </div>`
    let rowElement = getElementFromString(string);
    // console.log(rowElement);       
    addRow.appendChild(rowElement);

    let deleteRow = document.getElementsByClassName("deleteRow");
    for (item of deleteRow) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }


    // delete row

    let qty = document.getElementById("qty").value;
    let rate = document.getElementById("rate").value;


    // console.log(qty2);
    // console.log(rate2);

    let calculate = qty * rate;
    // console.log(calculate2);

    let amount = document.getElementById("amount");

    amount.innerHTML = calculate;


    // console.log(amount2);









    addedSrNo++;
})


function update() {
    let qty2 = document.getElementById("qty2").value;
    let rate2 = document.getElementById("rate2").value;
    let calculate2 = qty2 * rate2;
    let amount2 = document.getElementById("amount2");
    amount2.innerHTML = calculate2;



    let qty3 = document.getElementById("qty3").value;
    let rate3 = document.getElementById("rate3").value;
    let calculate3 = qty3 * rate3;
    let amount3 = document.getElementById("amount3");
    amount3.innerHTML = calculate3;


    let qty4 = document.getElementById("qty4").value;
    let rate4 = document.getElementById("rate4").value;
    let calculate4 = qty4 * rate4;
    let amount4 = document.getElementById("amount4");
    amount4.innerHTML = calculate4;

    let qty5 = document.getElementById("qty5").value;
    let rate5 = document.getElementById("rate5").value;
    let calculate5 = qty5 * rate5;
    let amount5 = document.getElementById("amount5");
    amount5.innerHTML = calculate5;

    let qty6 = document.getElementById("qty6").value;
    let rate6 = document.getElementById("rate6").value;
    let calculate6 = qty6 * rate6;
    let amount6 = document.getElementById("amount6");
    amount6.innerHTML = calculate6;

    let qty7 = document.getElementById("qty7").value;
    let rate7 = document.getElementById("rate7").value;
    let calculate7 = qty7 * rate7;
    let amount7 = document.getElementById("amount7");
    amount7.innerHTML = calculate7;

    let qty8 = document.getElementById("qty8").value;
    let rate8 = document.getElementById("rate8").value;
    let calculate8 = qty8 * rate8;
    let amount8 = document.getElementById("amount8");
    amount8.innerHTML = calculate8;

    let qty9 = document.getElementById("qty9").value;
    let rate9 = document.getElementById("rate9").value;
    let calculate9 = qty9 * rate9;
    let amount9 = document.getElementById("amount9");
    amount9.innerHTML = calculate9;

    let qty10 = document.getElementById("qty10").value;
    let rate10 = document.getElementById("rate10").value;
    let calculate10 = qty10 * rate10;
    let amount10 = document.getElementById("amount10");
    amount10.innerHTML = calculate10;




}


let shipping = document.getElementById("shipping");

shipping.addEventListener('blur', () => {
    // shipping.value = shipping;
})

let roundOff = document.getElementById("roundOff");
roundOff.addEventListener('blur', () => {
    // roundOff.value = roundOff;
})
function calculate() {

    var sum = 0;
    $('[id^=amount]').each(function () {
        sum = sum + parseInt($(this).text());
    });
    let taxableAmt = document.getElementById("taxableAmt");
    taxableAmt.innerHTML = sum;
    // console.log(taxableAmt.innerHTML);


    let taxes = Number(taxableAmt.innerHTML) * 0.18;

    let tax = document.getElementById("tax");

    tax.innerHTML = taxes;

    let total = Number(taxableAmt.innerHTML) + Number(tax.innerHTML);


    let totalAmt = document.getElementById("totalAmt");
    totalAmt.innerHTML = total;
    // console.log(total);






    let grandTotalAll = total + Number(shipping.value) + Number(roundOff.value);

    let grandTotal = document.getElementById("grandTotal");

    grandTotal.innerHTML = grandTotalAll;


}


// Alert functionality

class Display {

    show() {
        let message = document.getElementById("message")
        message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your Invoice Has been Successfully created .
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

        setTimeout(() => {
            message.innerHTML = '';
        }, 5000);
    }
}


let saveInvoiceBtn = document.getElementById("saveInvoiceBtn");
saveInvoiceBtn.addEventListener('click', () => {
    // document.getElementById("printbtn").style.display = "block";
    
    
    
    
    
    // Loop for contents 
    
    
    // let addRow = document.getElementById("addRow");

    // if(addRow.length = 1){
    //     data = {};
    //     for (let i = 0; i < addedSrNo + 1; i++){
    //         if(document.getElementById('description' + (i + 1)) != undefined) {
    //             let description = document.getElementById('description' + (i + 1)).value;
    //             // let qty = document.getElementById('qty' + (i + 1)).value;
    //             // let unit = document.getElementById('unit' + (i + 1)).value;
    //             // let rate = document.getElementById('rate' + (i + 1)).value;
    //             // let amount = document.getElementById('amount' + (i + 1)).innerHTML;
    //             // let alldata = [description, qty, rate, unit, amount]
    //             data[description] = description;
    //         }
    //     }
    //     // data = JSON.stringify(data);
    // }else{
    //     // data = {};
    //     console.log("not Working");
    // }
    // console.log(data);


    let descriptionVal = document.getElementsByClassName('description');
    
    let str=''

    for (let e of descriptionVal) {
        str = str + `<div> ${e.value} </div>`;
    }


    let qtyVal = document.getElementsByClassName('quantities');
    
    let string=''

    for (let e of qtyVal) {
        string = string + `<div> ${e.value} </div>`;
    }

    let unitVal = document.getElementsByClassName('units');
    
    let stringUnit=''

    for (let e of unitVal) {
        stringUnit = stringUnit + `<div> ${e.value} </div>`;
    }


    let rateVal = document.getElementsByClassName('rates');
    
    let stringRate=''

    for (let e of rateVal) {
        stringRate = stringRate + `<div> ${e.value} </div>`;
    }


    let amtVal = document.getElementsByClassName('amounts');
    
    let stringAmt=''

    for (let e of amtVal) {
        stringAmt = stringAmt + `<div> ${e.innerHTML} </div>`;
    }









    // Add new created invoice data to local storage
    let invoiceNumberAuto = document.getElementById("invoiceNumberAuto");
    let invoiceDateAuto = document.getElementById("invoiceDateAuto");
    let partyNameAuto = document.getElementById("partyNameAuto");
    let nopAuto = document.getElementById("nopAuto");
    let addressAuto = document.getElementById("addressAuto");
    let transportAuto = document.getElementById("transportAuto");
    let stateAuto = document.getElementById("stateAuto");
    let gstinAuto = document.getElementById("gstinAuto");
    let mblAuto = document.getElementById("mblAuto");
    let placeOfSupplyAuto = document.getElementById("placeOfSupplyAuto");
    
    // Contents areas list
    
    
    let description = document.getElementById("description");
    let qty = document.getElementById("qty");
    let unit = document.getElementById("unit");
    let rate = document.getElementById("rate");
    let amount = document.getElementById("amount");     //inner html
    


    // let description2 = document.getElementById("description2");
    // let qty2 = document.getElementById("qty2");
    // let unit2 = document.getElementById("unit2");
    // let rate2 = document.getElementById("rate2");
    // let amount2 = document.getElementById("amount2");
    
    
    // Calculation area elements
    
    let taxableAmt = document.getElementById("taxableAmt");  //inner html
    let tax = document.getElementById("tax");    //inner html
    let totalAmt = document.getElementById("totalAmt");     //inner html
    let shipping = document.getElementById("shipping");
    let roundOff = document.getElementById("roundOff");
    let grandTotal = document.getElementById("grandTotal");    //inner html
    
    


    if (partyNameAuto.value.length != 0, stateAuto.value.length != 0, gstinAuto.value.length != 0) {
        // Alert functionality


        let display = new Display();
        display.show();
        let invoices = localStorage.getItem("invoices");
        if (invoices == null) {
            invoices = [];
        } else {
            invoices = JSON.parse(invoices);
        }
        let myObj = {
            invoiceNumber: invoiceNumberAuto.value,
            invoiceDate: invoiceDateAuto.value,
            partyName: partyNameAuto.value,
            nop: nopAuto.value,
            address: addressAuto.value,
            transport: transportAuto.value,
            state: stateAuto.value,
            gstin: gstinAuto.value,
            mbl: mblAuto.value,
            placeOfSupply: placeOfSupplyAuto.value,




            descriptionKey: description.value,
            qtyKey: qty.value,
            unitKey: unit.value,
            rateKey: rate.value,
            amountKey: amount.innerHTML,


            alldatas: str,

            allQtys: string,
            allUnits: stringUnit,
            allRates: stringRate,
            allAmounts: stringAmt,



            // descriptionKey2: description2.value,
            // qtyKey2: qty2.value,
            // unitKey2: unit2.value,
            // rateKey2: rate2.value,
            // amountKey2: amount2.innerHTML,




            taxableAmtKey: taxableAmt.innerHTML,
            taxKey: tax.innerHTML,
            totalAmtKey: totalAmt.innerHTML,
            shippingKey: shipping.value,
            roundOffKey: roundOff.value,
            grandTotalKey: grandTotal.innerHTML
        }

        invoices.push(myObj);
        localStorage.setItem("invoices", JSON.stringify(invoices));
    } else {
        alert("Error! Please Fill Required Feilds")

    }




    



    showInvoices();
})


// Reset Button functionality

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', ()=>{
    window.location.reload();

    

})

function showInvoices() {
    let invoices = localStorage.getItem("invoices");
    if (invoices == null) {
        invoices = [];
    } else {
        invoices = JSON.parse(invoices);
    }
    let invoiceOutput = "";


    let invoiceNumberAuto = document.getElementById("invoiceNumberAuto");
    invoiceNumberAuto.value = invoices.length+1;

    console.log(invoices.alldatas);

    invoices.forEach((element, index) => {
        invoiceOutput += `
                        <div class="invoices-data-main my-1">
                            <div class="invoices-data">
                                <div class="dateInvoiceList-block block">${element.invoiceDate}</div>
                                <div class="invoiceNumberInvoiceList-block block">${element.invoiceNumber}</div>
                                <div class="partyNameInvoiceList-block block">${element.partyName}</div>
                                <div class="amountInvoiceList-block block">${element.grandTotalKey}</div>
                            </div>    
                                <!-- Button trigger modal -->
                            <div class="modal-btn-area" id="modal-btn-area${index + 1}" style="text-align: right;">
                                <button type="button" onclick="viewTemplate${index + 1}()" class="btn btn-warning">
                                    View
                                </button>
                            </div>

                                <!-- Modal -->
                            <div class="modalArea" id="modalArea${index + 1}">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header" id="modal-header">
                                            <h1 style="text-align: center; width: 100%;">Tax Invoice</h1>
                                            <button type="button" onclick="closeTemplate${index + 1}()" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" id="modal-body">
                                            <div class="container-fluid" style="border: 1px solid #888; padding: 10px;">
                                                <div class="output-top-area">
                                                    <div class="output-top-area-left">
                                                        <div class="output-logp-area">
                                                            <h1>[YOUR LOGO]</h1>
                                                        </div>
                                                        <div class="outputt output-shipper">
                                                            <h5>Shipper</h5>
                                                            <h6>Company PVT LTD</h6>
                                                            <p>1/845, B-54</p>
                                                            <p>3rd Floor, xyz Street </p>
                                                            <p>Aligarh U.P.</p>
                                                            <p>Mob : <span>+91 0000000000</span></p>
                                                            <p>GSTIN - <span>09AAAAA1234A1Z0</span></p>
                                                        </div>
                                                    </div>
                                                    <div class="output-top-area-right">
                                                        <div class="outputt output-details">
                                                            <h5>Details</h5>
                                                            <p>Invoice No. - <span id="invoiceNoOutput">${element.invoiceNumber}</span></p>
                                                            <p>Invoice Date. - <span
                                                                    id="invoiceDateOutput">${element.invoiceDate}</span></p>
                                                            <p>No. of Packets - <span id="nopOutput">${element.nop}</span></p>
                                                            <p>Transport - <span id="transportOutput">${element.transport}</span>
                                                            </p>
                                                            <p>Place Of Supply - <span
                                                                    id="placeOfSupplyOutput">${element.placeOfSupply}</span></p>
                                                        </div>
                                                        <div class="outputt output-billto my-2">
                                                            <h5>Bill To</h5>
                                                            <p id="partyNameOutput">${element.partyName}</p>
                                                            <div id="partyAddressOutput">
                                                                ${element.address}</div>
                                                            <p>State - <span id="StateOutput">${element.state}</span></p>
                                                            <p>Mob - +91 <span id="mblOutput">${element.mbl}</span></p>
                                                            <p>GSTIN - <span id="gstinOutput">${element.gstin}</span></p>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div class="outputMiddleArea">
                                                
                                                    <div class="output-top-row">
                                                        <div class="blocks srNoOutput">
                                                            Sr No.
                                                        </div>
                                                        <div class="blocks descriptionOutput">
                                                            Item Description
                                                        </div>
                                                        <div class="blocks qtyOutput">
                                                            Qty
                                                        </div>
                                                        <div class="blocks unitOutput">
                                                            Unit
                                                        </div>
                                                        <div class="blocks rateOutput">
                                                            Rate
                                                        </div>
                                                        <div class="blocks amtOutput">
                                                            Amount
                                                        </div>
                                                    </div>
                                                    



                                                    <div class="output-matter-area">
                                                    <div id="srNoOutput" class="srNoOutput">
                                                    
                                                    </div>
                                                    <div id="descriptionOutput" style="text-align: left;"
                                                    class="descriptionOutput">
                                                    ${element.alldatas}
                                                    </div>
                                                    <div id="qtyOutput" class="qtyOutput">
                                                            ${element.allQtys}
                                                        </div>
                                                        <div id="unitOutput" class="unitOutput">
                                                            ${element.allUnits}
                                                        </div>
                                                        <div id="rateOutput" class="rateOutput">
                                                            ${element.allRates}
                                                        </div>
                                                        <div id="amtOutput" class="amtOutput">
                                                            ${element.allAmounts}
                                                        </div>
                                                    </div>



                                                    



                                                </div>



                                                <div class="outputCalculationArea my-3">
                                                    <div class="calculate-nav">
                                                        <div class="cols">
                                                            <p>Taxable Amt</p>
                                                        </div>
                                                        <div class="cols">
                                                            <p>Tax</p>
                                                        </div>
                                                        <div class="cols">
                                                            <p>Total</p>
                                                        </div>
                                                        <div class="cols">
                                                            <p>Shipping</p>
                                                        </div>
                                                        <div class="cols">
                                                            <p>Round Off</p>
                                                        </div>
                                                        <div class="cols">
                                                            <p><b>Grand Total</b></p>
                                                        </div>
                                                    </div>
                                                    <div class="calculate-inputs">
                                                        <div class="cols" id="taxableValueOutput"
                                                            style="border: 1px solid #333;">${element.taxableAmtKey}</div>
                                                        <div class="cols" id="taxOutput"
                                                            style="border: 1px solid #333;">${element.taxKey}</div>
                                                        <div class="cols" id="totalOutput"
                                                            style="border: 1px solid #333;">${element.totalAmtKey}</div>
                                                        <div class="cols" id="shippingOutput"
                                                            style="border: 1px solid #333;">${element.shippingKey}</div>
                                                        <div class="cols" id="roundOffOutput"
                                                            style="border: 1px solid #333;">${element.roundOffKey}</div>
                                                        <div class="cols" id="grandTotalOutput"
                                                            style="border: 2px solid #333; font-size: 20px;">${element.grandTotalKey}</div>
                                                    </div>
                                                </div>



                                                <div class="outputBottomArea my-3">
                                                    <div class="outputBottomArea-left">
                                                        <div class="outputtt">
                                                            <h6>Make All Checks payable to :</h6>
                                                            <p>Company Name</p>
                                                            <p>Bank Name - <span>Bank Of Baroda</span></p>
                                                            <p>Account No. - <span>15476853186513</span></p>
                                                            <p>Bank AD Code - <span>09AAAAA1234A1Z0</span></p>
                                                            <p>IFSC Code - <span>BOB0RAMGHA</span></p>
                                                        </div>
                                                    </div>
                                                    <div class="outputBottomArea-right">
                                                        <h6>For Company Name</h6><br><br>
                                                        <p>Authorised Signatory</p>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        <div class="modal-footer" id="modal-footer">
                                            <button type="button" class="btn btn-primary" onclick="window.print()">Print
                                                Invoice</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>      
        `

        
        // let createarea = document.querySelector(".view-btn-output-area");
        let dyanmicallyInvoiceListArea = document.querySelector(".dyanmically-invoice-list-area");
        
        dyanmicallyInvoiceListArea.innerHTML = invoiceOutput;
        
        // createarea.innerHTML = invoiceOutput;
    });
}







