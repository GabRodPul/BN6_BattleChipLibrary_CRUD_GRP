package com.gabrielrp.bn6battlechiplibrary.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabrielrp.bn6battlechiplibrary.entity.dao.IBattleChipDao;
import com.gabrielrp.bn6battlechiplibrary.entity.models.BattleChip;

@Service
public class BattleChipServiceImpl implements IBattleChipService {

	@Autowired
	IBattleChipDao battleChipDao;

	@Override
	public List<BattleChip> getAll() {
		// TODO Auto-generated method stub
		return (List<BattleChip>) battleChipDao.findAll();
	}

	@Override
	public BattleChip getOne(long id) {
		// TODO Auto-generated method stub
		return battleChipDao.findById(id).orElse(null);
	}

	@Override
	public void insert(BattleChip battleChip) {
		// TODO Auto-generated method stub
		battleChipDao.save(battleChip);
	}	

	@Override
	public void update(BattleChip battleChip, long id) {
	    battleChipDao.findById(id).ifPresent((x)->{
	               battleChip.setId(id);
	               battleChipDao.save(battleChip);
	    });
	}
	
	// Does not work I think??
	@Override
	public void delete(BattleChip battleChip) {
	    battleChipDao.delete(battleChip);
	}
	
	@Override
	public void deleteById(long id) {
	    battleChipDao.deleteById(id);
	}
}