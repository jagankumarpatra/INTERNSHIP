// fetch("http://localhost:8080/data")
//   .then((response) => response.json())
//   .then((data) => {
//     //const mydata = data.mydata;
//     const dishesContainer = document.getElementById("hotel");
//     data.forEach((data) => {
//       const div = document.createElement("div");
//       const image = document.createElement("img");
//       image.src = data.link;
//       const dishTitle = document.createElement("h1");
//       dishTitle.innerText = data.dish;
//       const desc = document.createElement("p");
//       desc.innerText = data.description;
//       const button1 = document.createElement("button");
//       button1.innerText = "show Description";
//       button1.addEventListener("click", () => {
//         desc.innerText = data.description;
//         localStorage.setItem("id", JSON.stringify(data.id));
//       });
//       const button2 = document.createElement("button");
//       button2.innerText = "click for Hide";
//       button2.addEventListener("click", () => {
//         desc.innerText = "";
//       });
//       const updatebutton = document.createElement("button");
//       updatebutton.innerText = "UPDATE";
//       updatebutton.addEventListener("click", () => {
//         const updatetitle = prompt("");
//         const newobj = {
//           dish: updatetitle,
//           link: data.link,
//           description: data.description,
//         };
//         fetch(`http://localhost:8080/mydata/${data.id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newobj),
//         })
//           .then((res) => {
//             alert("updated title successfully");
//           })
//           .catch((err) => {
//             alert("error occurred while updating" + err);
//           });
//       });
//       const deletebutton = document.createElement("button");
//       deletebutton.innerText = "DELETE";
//       deletebutton.addEventListener("click", () => {
//         fetch(`http://localhost:8080/mydata/${data.id}`, {
//           method: "DELETE",
//         })
//           .then((res) => {
//             alert("Deleted the item");
//           })
//           .catch((err) => {
//             alert("error occurred while deleting" + err);
//           });
//       });

//       div.append(image, dishTitle, desc, button1, button2, updatebutton, deletebutton);
//       dishesContainer.append(div);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data data:", error);
//   });


fetch("http://localhost:8080/data")
  .then((response) => response.json())
  .then((data) => {
    const dishesContainer = document.getElementById("hotel");
    data.forEach((data) => {
      const div = document.createElement("div");
      const image = document.createElement("img");
      image.src = data.link;
      const dishTitle = document.createElement("h1");
      dishTitle.innerText = data.dish;
      const desc = document.createElement("p");
      desc.innerText = data.description;
      const button1 = document.createElement("button");
      button1.innerText = "Show Description";
      button1.addEventListener("click", () => {
        desc.innerText = data.description;
        localStorage.setItem("id", JSON.stringify(data.id));
      });
      const button2 = document.createElement("button");
      button2.innerText = "Hide Description";
      button2.addEventListener("click", () => {
        desc.innerText = "";
      });
      const updateButton = document.createElement("button");
      updateButton.innerText = "UPDATE";
      updateButton.addEventListener("click", () => {
        const updateTitle = prompt("Enter the updated title:");
        if (updateTitle) {
          const updateddata = {
            dish: updateTitle,
            link: data.link,
            description: data.description,
          };
          fetch(`http://localhost:8080/mydata/${data.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateddata),
          })
            .then((res) => {
              if (res.ok) {
                alert("Title updated successfully");
                dishTitle.innerText = updateTitle;
              } else {
                throw new Error("Failed to update title");
              }
            })
            .catch((err) => {
              alert("An error occurred while updating: " + err.message);
            });
        }
      });
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "DELETE";
      deleteButton.addEventListener("click", () => {
        fetch(`http://localhost:8080/mydata/${data.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              alert("Item deleted successfully");
              div.remove(); // Remove the deleted data from the DOM
            } else {
              throw new Error("Failed to delete item");
            }
          })
          .catch((err) => {
            alert("An error occurred while deleting: " + err.message);
          });
      });

      div.append(image, dishTitle, desc, button1, button2, updateButton, deleteButton);
      dishesContainer.append(div);
    });
  })
  .catch((error) => {
    console.error("Error fetching data data:", error);
  });
