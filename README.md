# WARNING
 This README may be modified as I remember stuff that should be noted.

# BN6_BattleChipLibrary_CRUD_GRP
 Allows you to navigate a library of BattleChips from MMBN6. You can delete and add your own, too!


# About MegaMan Battle Network
 MegaMan Battle Network is an action RPG spin-off series of videogames, based of Capcom's MegaMan IP.
 Set in an alternate universe where the Internet connects the world with it's own virtual world, people use NetNavis to navigate the Internet, and NetBattle computer viruses or other NetNavis.
 
 The games are centered around deck-building (or folder-building, to be precise) and finding good synergies within your deck.
 
 Your folders can store up to 30 BattleChips, and with a given amount of copies for each BattleChip.
 The criteria for how many copies you can carry varies from game to game. In Battle Network 6, the last entry in the series, this number is based given the range of the size of the BattleChip (MB).
 Basically, when in battle, each turn you can select up to 5 random BattleChips from your folder:
  - You can only choose BattleChips that share the same code (Each chip has one, but one type of chip can have different codes) and/or Chips with Asterisk code.
  - Alternatively, you can choose Chips with different alphabetical codes ONLY if they are the same type. As an example, Cannon A can be paired with Cannon B, then C, etc.
  - Certain chip combinations yield a ProgramAdvance, powerful BattleChips that deal enormous damage. These are not implemented in this app.

# About this app
# Backend
 Not much to say here. Just basic, working CRUD. No error handling due to time constraints, sadly. This next things could be considered as "extra work/implementations" not discussed in class, though:
 
 - The database and model implement an Enum to verify the possible values the 'Element' attribute can have.
 - Also, credits to Zulleyy3 for the JSON with all the data for the chips (https://github.com/Zulleyy3/ColonelBot-v4/blob/master/ColonelBot-v4/Data/ChipLibrary.json). This data was converted into SQL with the help of this tool and editing through VSCode: https://www.convertjson.com/json-to-sql.htm. The database also stores images in form of URLs, which are later loaded into the frontend.
 - Also, Postman endpoints for the app are documented here: https://documenter.getpostman.com/view/23623831/2s83tGoX9p.
 
 # Frontend
 This is way more elaborate. The app allows you to insert new BattleChips, fetch existis Chips from the database and delete said chips. Chip editing implementation wasn't possible due to time constraints, too.
 
 The app its composed of 2 different pages:
 - home: Add new chips to the database here by pressing a button to reveal the form. Press 'Show BattleChips' to fetch all BattleChips present in the database.
 - battlechips: See all BattleChips and delete 'em, too. It loads chip images from external URLs, and if a URL is invalid, a placeholder image will be used instead. Note that in the code for the app there may be present some unused code, more specifically for the Edit function.

 There are two components:
 - battle-chip-delete-button: Unused. The functionality for this component was later implemented in the battlechips page directly.
 - battle-chip-editor: The form to create BattleChips.
 
 Extra implementations:
 - CRD requests: An ion-toast notification will be shown to the user to let them know wheter a request to the database was succesful or not.
 
 - battle-chip-editor:
  - All form fields, except image due to some complications (which doesn't matter that much as I'll explain next), are validated and have default values in order to speed things up a bit, though after uploading, fields are cleaned and leave no default values. Invalid fields will be notified to the user in the same form and the user won't be able to upload a chip unless data is correct. Alias implements a pattern to validate its input.
  - Implemented a custom validator called 'validCodes' that checks if the codes for a BattleChip are correct (Up to 3 alphabetical characters and/or an asterisk, and no repeats). Created out of necessity after Validators.pattern almost made me lose my sanity cuz it kinda... does not work properly.
  - The form in home can be toggled in and out of view.
 
 - Images are loaded from URLs. If an URL happens to not contain an image, it'll be then replaced with a default image of a Mettaur with a broken chip.
 
