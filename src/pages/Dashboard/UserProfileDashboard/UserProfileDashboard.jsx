
import Loading from "../../../component/Loading/Loading";
import useCurrentUser from "../../../hook/useCurrentUser";
const UserProfileDashboard = () => {
    const { currentUser, isLoading } = useCurrentUser();

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(currentUser[0]);

    const { email: userEmail, name, image} = currentUser[0];




    return (

        <div>
            <div className="flex justify-center ">
                <div className=" py-10">

                    <div className="flex justify-center">
                        <img className="w-28 h-28 rounded-full" src={image} />
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold ">{name}</h2>
                        <h2 className="font-semibold ">{userEmail}</h2>
                    </div>

                </div>
            </div>

        </div>


    )
};

export default UserProfileDashboard;