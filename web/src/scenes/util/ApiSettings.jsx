import axiosInstance from "axios";

const apiSettings = {

createListing: async (data) => {
    let form_data = new FormData();
    if (data.photo)
        form_data.append("photo", data.photo.name);
    form_data.append("name", data.name);
    form_data.append("description", data.description);
    form_data.append("category", data.category);
    form_data.append("firstBid", data.firstBid);

const myNewModel = await axiosInstance
        .post(`http://127.0.0.1:9000/itens`, form_data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            return res;
        }).catch((error) => {
            return error.response;
        });

    if (myNewModel.status === 201) {
        window.location.href = `http://127.0.0.1:9000/itens/${myNewModel.data.id}`;
    }
    return myNewModel;
    },
};

export default apiSettings;