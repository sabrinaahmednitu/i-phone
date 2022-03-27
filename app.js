
//for case 
function updateProductNumber (product,price,isIncreasing){
    const productInput=document.getElementById(product + '-number');
    let productNumber=productInput.value;
    if(isIncreasing==true){
        productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0){
            productNumber=parseInt(productNumber)-1;
    }

    productInput.value=productNumber;

    //update product total
    const productPrice=document.getElementById(product+ '-price');
    const productPriceText=productPrice.innerText;
    productPrice.innerText=productNumber*price;
    console.log(productPriceText);

    //calculate total
    calculateTotal();
   
}

function getInputValue(product){
  const productInput=document.getElementById(product+'-number');
  const productNumber= parseInt (productInput.value) ;
  return productNumber;
}

function calculateTotal(){

  const phoneTotal= getInputValue('phone')*1219;
  const caseTotal= getInputValue('case')*59;
  const subTotal=phoneTotal+caseTotal;
  const tax=subTotal/10;
  const totalPrice=subTotal+tax;
  //update on the html
  document.getElementById('sub-total').innerText=subTotal;
  document.getElementById('tax').innerText=tax;
  document.getElementById('total-price').innerText=totalPrice;
  
}

//for case
document.getElementById('case-plus').addEventListener('click',function(){
  updateProductNumber('case',59,true);
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
})


//for phone
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
    
  updateProductNumber('phone',1219,false);
 
    
})