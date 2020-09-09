package com.cts.product.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.product.Product;
import com.cts.product.dao.ProductDao;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductRestController {
	
	@Autowired
	private ProductDao prodDao;
	
	
	@GetMapping
	public List<Product> findAll(){
		return prodDao.findAll();
	}
	
	@PutMapping(value = "/{id}")
	public void modifyPetById(@PathVariable("id") ObjectId id,  @RequestBody Product product) {
	  product.setId(id);
	  prodDao.save(product);
	}
	
	@PutMapping
	public Product update(@RequestBody Product product) {
		return prodDao.save(product);
	}
	
	@PostMapping
	public Product save(@RequestBody Product product) {
		return prodDao.save(product);
	}
	
	@PostMapping("/saveAll")
	public List<Product> saveAll(@RequestBody List<Product> products){
		return prodDao.saveAll(products);
	}
	
	
	@GetMapping("/{id}")
	public Product findById(@PathVariable("id")Object id) {
		
		return prodDao.findById(id).orElse(null);
	}
	
	@GetMapping("/byName/{name}")
	public List<Product> findByName(@PathVariable("name")String name){
		return prodDao.findProductByNameLike("%"+name+"%");
		
	}
	
	@DeleteMapping
	public void deleteProduct(@RequestBody Product product) {
		prodDao.delete(product);
	}
	
	@DeleteMapping("/{id}")
	public void deleteProductById(@PathVariable("id") Object id) {
		prodDao.deleteById(id);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
