
function Student ({id, onRemove, username, age, image}) {
    return (
        <>
            <div className="flex content-center items-center my-2 bg-gray-200 min-w-96 p-1">
                <div className="w-24 h-24 relative overflow-hidden rounded-full border-solid border-2 border-cyan-400">
                    <img src={image} alt="" className="absolute inset-0 w-full  rounded-full h-full object-cover p-1" />
                </div>
                <div className="text-1xl mx-5">
                    <p>{username}</p>
                    <p>{age}</p>
                </div>
                <div className="ml-auto pr-5">
                    <button onClick={() => onRemove(id)} className="bg-red-600 text-white rounded-full w-7 h-7 text-sm p-1 hover:shadow-sm hover:shadow-red-400"><i className="fa fa-trash"></i></button>
                </div>
            </div>
            
        </>
    )
}

export default Student