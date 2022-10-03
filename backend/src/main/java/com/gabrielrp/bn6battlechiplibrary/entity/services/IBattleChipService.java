package com.gabrielrp.bn6battlechiplibrary.entity.services;


import java.util.List;

import com.gabrielrp.bn6battlechiplibrary.entity.models.BattleChip;

public interface IBattleChipService {

	public List<BattleChip> getAll();
	public BattleChip getOne(long id);
	public void insert(BattleChip battleChip);
	public void update(BattleChip battleChip, long id);
	public void delete(BattleChip battleChip);
	public void deleteById(long id);
	
}