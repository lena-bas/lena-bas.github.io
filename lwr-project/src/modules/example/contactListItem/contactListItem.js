import { LightningElement, api } from 'lwc';

export default class ContactListItem extends LightningElement {
    @api contact;

    handleClick(){
       
        let evt = new CustomEvent('contactselected', {detail: this.contact.Id});
        this.dispatchEvent(evt);

        
    }

}
