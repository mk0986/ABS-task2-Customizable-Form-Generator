function addTextField() {
    let form = document.getElementById('dynamic-form');
    let div = document.createElement('div');
    div.innerHTML = `
        <label for="text-field">Text Field</label>
        <input type="text" id="text-field" name="text-field">
    `;
    form.appendChild(div);
}

function addEmailField() {
    let form = document.getElementById('dynamic-form');
    let div = document.createElement('div');
    div.innerHTML = `
        <label for="email-field">Email Field</label>
        <input type="email" id="email-field" name="email-field">
    `;
    form.appendChild(div);
}

function addNumberField() {
    let form = document.getElementById('dynamic-form');
    let div = document.createElement('div');
    div.innerHTML = `
        <label for="number-field">Number Field</label>
        <input type="number" id="number-field" name="number-field">
    `;
    form.appendChild(div);
}

function addSelectField() {
    let form = document.getElementById('dynamic-form');
    let div = document.createElement('div');
    div.innerHTML = `
        <label for="select-field">Select Field</label>
        <select id="select-field" name="select-field">
            <option value="">Please select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    `;
    form.appendChild(div);
}
