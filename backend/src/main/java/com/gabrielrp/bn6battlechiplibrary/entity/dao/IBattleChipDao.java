package com.gabrielrp.bn6battlechiplibrary.entity.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.gabrielrp.bn6battlechiplibrary.entity.models.BattleChip;

public interface IBattleChipDao extends CrudRepository<BattleChip, Long> {
   
    
}