package com.fabriciohsilva.patrimonio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabriciohsilva.patrimonio.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
