import { useState } from 'react';
import Navigation from './components/Navigation';
import PatientForm from './components/PatientForm';
import Tableform from './components/Tableform';
import NotificationPanel from './components/NotificationPanel';

function App() {
  const [editindex, setEditindex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    roomNumber: '',
    contact: '',
    emergency_level: '',
    sufferingFrom: ''
  });
  
  const initialformdata = {
    name: '',
    age: '',
    gender: '',
    roomNumber: '',
    contact: '',
    emergency_level: '',
    sufferingFrom: ''
  };
  
  const [patients, setPatients] = useState([]);
  const [notifications, setNotifications] = useState([]);

  function handleformdata(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if(editindex !== null){
      const updatedpatients = [...patients];
      updatedpatients[editindex] = formData;
      setPatients(updatedpatients);
      
      setNotifications([{
        name: formData.name,
        action: 'updated',
        condition: formData.emergency_level,
        suffering: formData.sufferingFrom,
        room: formData.roomNumber,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
      }, ...notifications]);
      
      setFormData(initialformdata);
      setEditindex(null);
    } else {
      setPatients([...patients, formData]);
      
      setNotifications([{
        name: formData.name,
        action: 'admitted',
        condition: formData.emergency_level,
        suffering: formData.sufferingFrom,
        room: formData.roomNumber,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
      }, ...notifications]);
      
      setFormData(initialformdata);
    }
  };

  const handleDelete = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
    if (editindex === index) {
      setFormData(initialformdata);
      setEditindex(null);
    } else if (editindex > index) {
      setEditindex(editindex - 1);
    }
  };

  const handleEdit = (index) => {
    const clickedidx = patients[index];
    setFormData(clickedidx);
    setEditindex(index);
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 w-full">
            <PatientForm 
              handleformdata={handleformdata} 
              handlesubmit={handlesubmit} 
              formData={formData} 
              editindex={editindex}
            />
            <Tableform 
              formData={patients} 
              handleEdit={handleEdit} 
              handleDelete={handleDelete}
            />
          </div>
          <NotificationPanel notifications={notifications} />
        </div>
      </div>
    </>
  );
}

export default App;