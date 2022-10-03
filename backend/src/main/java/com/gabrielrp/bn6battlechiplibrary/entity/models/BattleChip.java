package com.gabrielrp.bn6battlechiplibrary.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.gabrielrp.bn6battlechiplibrary.enums.Element;

@Entity
@Table(name = "battlechips")
public class BattleChip implements Serializable {
	
	private static final long serialVersionUID = 1L; // Es necesario
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;

	String name;
	
	@Column(columnDefinition = "ENUM('FIRE','AQUA','ELEC','WOOD','SWORD','WIND','CURSOR','SUMMON','BONUS_POINT','BREAK','NONE')")
    @Enumerated(EnumType.STRING)
	Element element;
	
	Integer mb;
	Integer atk; // Nullable
	String codes;
	String description;
	String image; // Image URL
	String alias; // Possible names, separated by commas
	
	public BattleChip() {}

	public BattleChip(String name, Element element, Integer mb, Integer atk, String codes, String description,
			String image, String alias) {
		super();
		this.name = name;
		this.element = element;
		this.mb = mb;
		this.atk = atk;
		this.codes = codes;
		this.description = description;
		this.image = image;
		this.alias = alias;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Element getElement() {
		return element;
	}

	public void setElement(Element element) {
		this.element = element;
	}

	public int getMb() {
		return mb;
	}

	public void setMb(Integer mb) {
		this.mb = mb;
	}

	public int getAtk() {
		return atk;
	}

	public void setAtk(Integer atk) {
		this.atk = atk;
	}

	public String getCodes() {
		return codes;
	}

	public void setCodes(String codes) {
		this.codes = codes;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getAlias() {
		return alias;
	}

	public void setAlias(String alias) {
		this.alias = alias;
	}
	
}
