// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  console.log(typeof price, typeof quantity);
  const subtotal = Number(price) * Number(quantity)
  product.querySelector('.subtotal span').innerText = subtotal
  
  return subtotal
}

function calculateAll() {
  // getElementsByClassName
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0
  let productRow = document.getElementsByClassName('product')
  for (let i=0; i < productRow.length; i++) {
   total = total + updateSubtotal(productRow[i])
  } 
  // ITERATION 3
   document.querySelector('#total-value span').innerText = total;
  }
  
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let productInput = document.querySelector('#product-input').value
  let priceInput= document.querySelector('#price-input').value
  let tr = document.createElement('tr');
  
  tr.classList.add('product')
  tr.innerHTML =
       `<td class="name">
          <span>${productInput}</span>
        </td>
        <td class="price">$<span>${priceInput}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>`
      
        document.querySelector('tbody').appendChild(tr)
      
      let removeButton = document.getElementsByClassName('btn btn-remove')
      productInput.value = '';
      priceInput.value = '';
      removeButton[removeButton.length - 1].addEventListener('click', removeProduct)
 
 }


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

 const removeButton = document.getElementsByClassName('btn btn-remove')
 for (let i=0; i < removeButton.length; i++) {
   removeButton[i].addEventListener('click', removeProduct)
 }

 const createButton = document.querySelector('#create');
 createButton.addEventListener('click', createProduct);
});
