const button=document.getElementById('submission');

button.addEventListener("click",function(event){
    event.preventDefault();
    const all_expenses={
       expense:expense.value,
       description:description.value,
       category:category.value,
    }
    const del_BTN=document.createElement("button");
    const Edit_BTN=document.createElement('button');
    Edit_BTN.innerText="Edit Expense"
    del_BTN.innerText="Delete Expense"
    const child=document.createElement('li')
    child.textContent=all_expenses.expense + "-" + all_expenses.description + "-" + all_expenses.category
    child.appendChild(del_BTN);
    child.appendChild(Edit_BTN);
    const parent=document.getElementById('listofexpense');
    parent.appendChild(child);
    localStorage.setItem(all_expenses.expense,JSON.stringify(all_expenses));
    del_BTN.addEventListener("click",function(event){
        parent.removeChild(child);
        localStorage.removeItem(all_expenses.expense);
    })
    Edit_BTN.addEventListener("click",function(event){
        localStorage.removeItem(all_expenses.expense);
        parent.removeChild(child);
        document.getElementById('expense').value=all_expenses.expense
        document.getElementById('description').value=all_expenses.description
        document.getElementById('category').value=all_expenses.category
    })
})
