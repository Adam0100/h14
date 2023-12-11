const addProduct = document.getElementById('addProduct')
const searchBtn = document.getElementById('searchBtn')
const removeBtn = document.getElementById('removeBtn')
const showAllBtn = document.getElementById('showAllBtn')

let products = [];
const resultElement = document.getElementById('result');

addProduct.onclick = function () {
    const productName = document.getElementById('productName').value.trim().toUpperCase();
    if (productName === '') {
        resultElement.innerText = 'Введите название товара.';
        return;
    }

    if (!products.includes(productName)) {
        products.push(productName);
        resultElement.innerText = `Товар "${productName}" успешно добавлен.`;
    } else {
        resultElement.innerText = `Товар "${productName}" уже существует.`;
    }

    document.getElementById('productName').value = '';
}

searchBtn.onclick = function () {
    const searchQuery = document.getElementById('searchProduct').value.trim().toUpperCase();
    if (searchQuery === '') {
        resultElement.innerText = 'Введите название товара для поиска.';
        return;
    }

    const found = products.includes(searchQuery);
    if (found) {
        resultElement.innerText = `Товар "${searchQuery}" найден.`;
    } else {
        resultElement.innerText = `Товар "${searchQuery}" не найден.`;
    }
}

removeBtn.onclick = function () {
    const productToRemove = document.getElementById('removeProduct').value.trim().toUpperCase();
    if (productToRemove === '') {
        resultElement.innerText = 'Введите название товара для удаления.';
        return;
    }

    const index = products.indexOf(productToRemove);
    if (index !== -1) {
        products.splice(index, 1);
        resultElement.innerText = `Товар "${productToRemove}" успешно удален.`;
    } else {
        resultElement.innerText = `Товар "${productToRemove}" не найден.`;
    }

    document.getElementById('removeProduct').value = '';
}

showAllBtn.onclick = function () {
    if (products.length === 0) {
        resultElement.innerText = `Товаров нету `;

    }
    else {
        resultElement.innerText = `Все товары: ${products.join(', ')} `;
    }
}