package com.gabrielrp.bn6battlechiplibrary.controllers;

import java.util.List;

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

import com.gabrielrp.bn6battlechiplibrary.entity.models.BattleChip;
import com.gabrielrp.bn6battlechiplibrary.entity.services.IBattleChipService;

@RestController
@RequestMapping("/battlechips")
@CrossOrigin(origins = "*")
public class BattleChipController {
	
	@Autowired
	IBattleChipService battleChipService;
	
	@GetMapping("")
	public List<BattleChip> getAll() {
		return battleChipService.getAll();
	}
	
	@GetMapping("/{id}")
	public BattleChip getOne(@PathVariable long id) {
		return battleChipService.getOne(id);
	}
	
	@PostMapping("")
	public void insert(@RequestBody BattleChip battleChip) {
		battleChipService.insert(battleChip);
	}
	
	@PutMapping("/{id}")
	public void update(BattleChip battleChip, @PathVariable long id) {
	    battleChipService.update(battleChip, id);
	}
	
	@DeleteMapping("")
	public void delete(BattleChip battleChip) {
        battleChipService.delete(battleChip);
    }

	@DeleteMapping("/{id}")
	public void deleteOne(@PathVariable(value = "id") long id) {
	    battleChipService.deleteById(id);
	}
}