import './LanguageSelector.css'


function LanguageSelector() {
    return (
        <>
            <select name={'languages'} id={'languages'}>
                <option value={"En"}>English</option>
                <option value={"De"}>Deutsch</option>
            </select>
        </>
    )
}

export default LanguageSelector

// function LanguageSelector() {
//
//     const [locale, setLocale] = useAtom(localeAtom);
//
//     const handleChange = event => {
//         const {value = 'en'} = event.currentTarget;
//         setLocale(value);
//     }
//
//
//     return (
//         <select onChange={handleChange} value={locale}>
//             <option value={'en'}>EN</option>
//             <option value={'de'}>DE</option>
//             <option value={'fr'}>FR</option>
//         </select>   )
// }
//
// export default LanguageSelector;