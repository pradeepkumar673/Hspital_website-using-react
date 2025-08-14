const Tableform = ({ handleEdit, formData, handleDelete }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <table className="border-collapse border border-gray-300 w-3/4">
                <thead className="bg-rose-300">
                    <tr>
                        <th className="border-2 p-2 border-gray-300">Name</th>
                        <th className="border-2 p-2 border-gray-300">Age</th>
                        <th className="border-2 p-2 border-gray-300">Gender</th>
                        <th className="border-2 p-2 border-gray-300">Room</th>
                        <th className="border-2 p-2 border-gray-300">Contact</th>
                        <th className="border-2 p-2 border-gray-300">Condition</th>
                        <th className="border-2 p-2 border-gray-300">Suffering From</th>
                        <th className="border-2 p-2 border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((item, index) => (
                        <tr key={index} className="bg-transparent">
                            <td className="border-2 p-2 border-gray-300">{item.name}</td>
                            <td className="border-2 p-2 border-gray-300">{item.age}</td>
                            <td className="border-2 p-2 border-gray-300">{item.gender}</td>
                            <td className="border-2 p-2 border-gray-300">{item.roomNumber}</td>
                            <td className="border-2 p-2 border-gray-300">{item.contact}</td>
                            <td className="border-2 p-2 border-gray-300">{item.emergency_level}</td>
                            <td className="border-2 p-2 border-gray-300">{item.sufferingFrom}</td>
                            <td className="flex flex-row items-center justify-center py-2 gap-2 w-full border-b-2 border-gray-200">
                                <button
                                    className="border-2 p-2 border-gray-300 rounded-md bg-rose-300"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="border-2 p-2 border-gray-300 rounded-md bg-green-300"
                                    onClick={() => handleEdit(index)}
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tableform;