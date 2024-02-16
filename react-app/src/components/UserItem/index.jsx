export const UserItem = ({ name, age, city, isAdult }) => {
    // if (isAdult) return (
    //     <li>{name} (Adult)</li>
    // )

    // return (
    //     <li>{name}</li>
    // )

    // Если ничего не нужно отображать
    // if (isAdult) return (
    //     <li>{name} (Adult)</li>
    // )

    // return null

    // return (
    //     <>
    //         {/* {
    //             isAdult 
    //             ? <li>{name} (Adult)</li>
    //             : <li>{name}</li>
    //         } */}

    //         {/* <li>{`${isAdult ? `${name} Adult` : name}`}</li> */}
    //         {/* <li>{isAdult ? name + ' (Adult)' : name}</li> */}
    //         {/* {isAdult && <li>{name} (Adult)</li>}
    //         {!isAdult && <li>{name}</li>} */}
            

    //     </>
    // )


    // Когда условная отрисовка касается точечного элемента из большого блока
    // if (isAdult) return (
    //     <li>
    //         <div>Name: {name}</div>
    //         <div>Age: {age}</div>
    //         <div>TRUE</div>
    //         <div>From: {city}</div>
    //     </li>
    // )

    // return (
    //     <li>
    //         <div>Name: {name}</div>
    //         <div>Age: {age}</div>
    //         <div>FALSE</div>
    //         <div>From: {city}</div>
    //     </li>
    // )

    // Вариант лучше
    return (
        <li>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>{isAdult ? 'TRUE' : 'FALSE'}</div>
            <div>From: {city}</div>
        </li>
    )
}