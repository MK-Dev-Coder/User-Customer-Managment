document.addEventListener('DOMContentLoaded', () => {
    const customers = [
        { name: 'John Doe', email: 'john@example.com', phone: '555-1234', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678', status: 'Inactive' },
        // Add more sample customers as needed
    ];

    const customerTableBody = document.getElementById('customerTableBody');

    function populateCustomerTable(customers) {
        customerTableBody.innerHTML = '';
        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.status}</td>
            `;
            row.addEventListener('click', () => {
                // Open Customer Details (to be implemented)
                alert('Customer Details for ' + customer.name);
            });
            customerTableBody.appendChild(row);
        });
    }

    populateCustomerTable(customers);

    // Search functionality
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const filteredCustomers = customers.filter(customer =>
            customer.name.toLowerCase().includes(query) ||
            customer.email.toLowerCase().includes(query) ||
            customer.phone.includes(query)
        );
        populateCustomerTable(filteredCustomers);
    });

    // Add Customer button event
    const addCustomerBtn = document.getElementById('addCustomerBtn');
    addCustomerBtn.addEventListener('click', () => {
        // Open Add Customer Form (to be implemented)
        window.location.href = 'add_customer.html';
    });
});
