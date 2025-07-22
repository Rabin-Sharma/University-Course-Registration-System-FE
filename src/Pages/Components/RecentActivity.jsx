import React, { useEffect, useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { fetchRecentActivity } from "../../Services/api";
import toast from "react-hot-toast";

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getActivities = async () => {
    setLoading(true);
    try {
      const activityData = await fetchRecentActivity();
      setActivities(activityData.activities);
    } catch (error) {
      toast.error("Failed to fetch recent activities");
      console.error("Error fetching recent activities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
    console.log("Recent Activity", activities);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {isLoading ? (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
        ) : activities.length > 0 ? (
          activities.map((activity, index) => (
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <CgSandClock className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                {/* <h4 className="font-medium text-gray-800">
                  {activity.title}
                </h4> */}
                <p className="font-medium text-gray-800">
                  {activity.description}
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No recent activities found.</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;


