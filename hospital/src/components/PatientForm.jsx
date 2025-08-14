function PatientForm({ editindex, formData, handleformdata, handlesubmit }) {
    return (
        <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md m-10">
            <h1 className="text-2xl font-semibold m-5 text-rose-400">Fill the patient detail below</h1>
            <form className="w-3/4" onSubmit={handlesubmit}>
                <div className="flex flex-row items-center justify-between m-5 gap-5 w-full">
                    <label className="text-lg font-semibold">Name:</label>
                    <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-md" placeholder="Enter patient name" 
                    onChange={(e) => handleformdata("name", e.target.value)} required value={formData.name}/>
                </div>
                <div className="flex flex-row items-center justify-between m-5 gap-5 w-full">
                    <label className="text-lg font-semibold">Age:</label>
                    <input type="number" className="w-1/2 p-2 border border-gray-300 rounded-md" placeholder="Enter patient age" 
                    onChange={(e) => handleformdata("age", e.target.value)} required value={formData.age}/>
                </div>
                <div className="flex flex-row items-center justify-between m-5 gap-5 w-full">
                    <label className="text-lg font-semibold">Gender:</label>
                    <select className="w-1/2 p-2 border border-gray-300 rounded-md" onChange={(e) => handleformdata("gender", e.target.value)} required value={formData.gender}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex flex-row items-center justify-between m-5 gap-5 w-full">
                    <label className="text-lg font-semibold">Room Number:</label>
                    <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-md" placeholder="Enter room number" onChange={(e) => handleformdata("roomNumber", e.target.value)} required value={formData.roomNumber}/>
                </div>
                <div className="flex flex-row items-center justify-between m-5 gap-5 w-full">
                    <label className="text-lg font-semibold">Contact:</label>
                    <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-md" placeholder="Enter patient contact" 
                    onChange={(e) => handleformdata("contact", e.target.value)} required value={formData.contact}/>
                </div>
                <div className="flex flex-row items-center justify-between m-5 gap-5 w-full">
                    <label className="text-lg font-semibold">Emergency Level:</label>
                    <select className="w-1/2 p-2 border border-gray-300 rounded-md"
                    onChange={(e) => handleformdata("emergency_level", e.target.value)} required value={formData.emergency_level}>
                        <option value="">Select Level</option>
                        <option value="low">Low</option>
                        <option value="critical">Critical</option>
                        <option value="emergency">Emergency</option>
                    </select>
                </div>
                <div className="flex flex-row items-center justify-between m-5 gap-5 w-full">
                    <label className="text-lg font-semibold">Suffering From:</label>
                    <select className="w-1/2 p-2 border border-gray-300 rounded-md"
                    onChange={(e) => handleformdata("sufferingFrom", e.target.value)} required value={formData.sufferingFrom}>
                        <option value="">Select Condition</option>
                        <option value="Accident">Accident</option>
                        <option value="Heart Attack">Heart Attack</option>
                        <option value="Stroke">Stroke</option>
                        <option value="Pneumonia">Pneumonia</option>
                        <option value="Fracture">Fracture</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" className="bg-rose-300 hover:bg-rose-400 text-gray-100 font-bold py-2 px-4 rounded-md m-5 w-full">
                    {editindex === null ? "Add Patient" : "Update Patient"}
                </button>
            </form>
        </div>
    )
}

export default PatientForm;