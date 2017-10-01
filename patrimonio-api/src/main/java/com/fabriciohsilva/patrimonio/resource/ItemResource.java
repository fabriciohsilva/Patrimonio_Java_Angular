package com.fabriciohsilva.patrimonio.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fabriciohsilva.patrimonio.model.Item;
import com.fabriciohsilva.patrimonio.repository.ItemRepository;

@RestController
@CrossOrigin("${origem-permitida}")
public class ItemResource {

	@Autowired
	private ItemRepository itemRepository;
	
	@GetMapping("/itens")
	public List<Item> listar(){
		return itemRepository.findAll();
	}//end public List<Item> listar()
	
	
	@PostMapping("/itens")
	public Item adicionar(@RequestBody  @Valid Item item) {
		return itemRepository.save(item);
	}//end public Item adicionar(Item item)
	
	
	
}//end public class ItemResource