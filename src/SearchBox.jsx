import { KernInputText } from "@kern-ux/react";
import { KernButton } from "@kern-ux/react";

export function SearchBox(){
    return (
        <>
            <div className="component-row">
            <div className="component-col">
                <KernInputText _label="Eingabefeld zur Suche" _touched _error="Fehlermeldung" _required _placeHolder="Suchtext" _maxLength="160"/>
                <KernButton _hide-label="true" _label="Primär" _variant="primary" _icons="{ 'left': { 'icon': 'material-symbols-outlined search' } }"></KernButton>
            </div>
            
            </div>
        </>
    );
}