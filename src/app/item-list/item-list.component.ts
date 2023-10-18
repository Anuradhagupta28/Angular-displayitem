import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  // Your items array goes here
 
  items: any[] = [
    {
      name: 'Smartphone',
      description: 'The latest smartphone with amazing features.',
      price: 499.99,
      category: 'Electronics'
    },
    {
      name: 'TV Stand',
      description: 'Stylish TV stand for your entertainment center.',
      price: 79.99,
      category: 'Furniture'
    },
    {
      name: 'Bookshelf',
      description: 'Wooden bookshelf for your book collection.',
      price: 69.99,
      category: 'Furniture'
    },
    {
      name: 'Laptop',
      description: 'High-performance laptop for work and gaming.',
      price: 999.99,
      category: 'Electronics'
    },
    {
      name: 'T-Shirt',
      description: 'Comfortable and stylish cotton T-shirt.',
      price: 19.99,
      category: 'Clothing'
    },
    {
      name: 'Sneakers',
      description: 'Trendy sneakers for daily wear.',
      price: 59.99,
      category: 'Clothing'
    },
    {
      name: 'Tablet',
      description: 'Portable tablet with a high-resolution screen.',
      price: 299.99,
      category: 'Electronics'
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Wireless speaker for music on the go.',
      price: 29.99,
      category: 'Electronics'
    },
    {
      name: 'Headphones',
      description: 'High-quality headphones for immersive audio.',
      price: 129.99,
      category: 'Electronics'
    },
   
    {
      name: 'Jeans',
      description: 'Classic denim jeans for all occasions.',
      price: 39.99,
      category: 'Clothing'
    },
    {
      name: 'Dress',
      description: 'Elegant dress for special occasions.',
      price: 79.99,
      category: 'Clothing'
    },
    {
      name: 'Desk Chair',
      description: 'Ergonomic desk chair for comfort at work.',
      price: 149.99,
      category: 'Furniture'
    },
    {
      name: 'Sofa',
      description: 'Comfortable and stylish living room sofa.',
      price: 599.99,
      category: 'Furniture'
    },
    {
      name: 'Coffee Table',
      description: 'Modern coffee table for your home.',
      price: 99.99,
      category: 'Furniture'
    },
    
  ];
  selectedCategory: string = 'All'; // Initialize with "All"
  searchTerm: string = '';

  filteredItems: any[] = this.items; // Initialize with all items

  onCategoryChange() {
    // Implement filtering logic based on the selected category
    if (this.selectedCategory === 'All') {
      this.filteredItems = this.items;
     
    } else {
      this.filteredItems = this.items.filter(item => item.category === this.selectedCategory);
      
    }
  
    // Apply additional filtering based on the search term
    this.filterBySearchTerm();
  }
  
  filterBySearchTerm() {
    if (this.searchTerm) {
      const searchTerm = this.searchTerm.toLowerCase();
      this.filteredItems = this.filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      );
    }
  }
  
}

