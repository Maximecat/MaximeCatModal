# @Maximecat/react-modal

Responsive modal dialog component for React.

## Installation

To install, you can use <span style="color:red">*npm*</span> or <span style="color:red">*yarn*</span> :

> $ npm install @maximecat/react-modal
> $ yarn add @maximecat/react-modal

* Use ```<MaximeCatModal>``` tag inside your React app.

### Exemple

```
<MaximeCatModal isOpen={isOpen} onClose={handleClose} message={"Employee Created !"} />
```

### Paramètres attendus
 * description -> react modal by maximecat (a modal displaying a message)
 * @param -> message : 'string' to display the message in the modal
 * @param -> isOpen : 'boolean' that changes from true to false
 * @param -> onClose : 'function' for closure of the modal