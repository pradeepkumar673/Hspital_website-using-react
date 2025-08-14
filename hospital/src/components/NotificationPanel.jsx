const NotificationPanel = ({ notifications }) => {
    return (
        <div className="lg:w-1/4 w-full lg:pl-5 lg:border-l-2 lg:border-gray-300 lg:mt-0 mt-5">
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
                <h2 className="text-xl font-bold mb-4 text-rose-500 border-b pb-2">PATIENT ALERTS</h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {notifications.length === 0 ? (
                        <p className="text-gray-500">No patient alerts yet</p>
                    ) : (
                        notifications.map((notification, index) => (
                            <div key={index} className="border-b pb-3 last:border-b-0">
                                <p className="text-sm text-gray-500 mb-1">{notification.date}</p>
                                <p className="text-gray-800">
                                    <span className="font-semibold">{notification.name}</span> has been {notification.action}.<br />
                                    Condition: <span className="font-medium">{notification.condition}</span><br />
                                    Suffering From: <span className="font-medium">{notification.suffering}</span><br />
                                    Room: <span className="font-medium">{notification.room}</span>
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default NotificationPanel;