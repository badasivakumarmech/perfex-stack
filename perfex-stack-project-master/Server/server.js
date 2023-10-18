const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("../Server/Model/userData");
const jwt = require("jsonwebtoken");
const middleware = require("./Middlware");
const AddInstituteData = require("./Model/AddInstituteData");

// const bodyParser = require("body-parser");

const app = express();
const port = 4010;

const mogoURL =
  "mongodb+srv://badasiva22:Siva991276@cluster0.iis7lrd.mongodb.net/perfex-stack-project?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors({ origin: "*" }));
// app.use(bodyParser.json());

//initalizing mongodb to node
mongoose
  .connect(mogoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e.message));

app.get("/", (req, res) => {
  res.send("Welcome to developer hubs server");
});

app.post("/UserRegister", async (req, res) => {
  console.log(req.body);

  try {
    const user = await userData.findOne({ UserEmail: req.body.UserEmail }); // mongo db condition
    // console.log(user)
    if (!user) {
      // or if(user === undefined)
      // user not found excutes below code
      const newUser = {
        UserEmail: req.body.UserEmail,
        UserPassword: req.body.UserPassword,
      };
      const userDetails = await userData.create(newUser); //  POSTING TO COLLECTION OR MODEL
      console.log(userDetails);

      res.status(200).send("user created successfully");
    } else {
      // if user mail id is founded send below response
      res.status(400).json("user already registered");
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json("message: e.message");
  }
});

//login

app.post("/Userlogin", async (req, res) => {
  const { UserEmail, UserPassword } = req.body;
  try {
    const user = await userData.findOne({ UserEmail });
    if (!user) {
      return res.status(401).json({ message: "Email not found" });
    }
    if (UserPassword !== user.UserPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const payload = {
      user: user.id,
    };
    jwt.sign(payload, "jwtpassword", { expiresIn: 36000000 }, (err, token) => {
      if (err) {
        throw err;
      }

      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred on the server. Please try again later.",
    });
  }
});
//Add Institute

app.post("/AddInstitute", async (req, res) => {
  try {
    // Find the last document with the lowest Sno (ascending order)
    const lastDocument = await AddInstituteData.findOne({}, null, {
      sort: { Sno: -1 },
    });

    let newSno = 1; // Default ID if the collection is empty
    if (lastDocument) {
      newSno = lastDocument.Sno + 1; // Calculate the new ID
    }

    const user = await AddInstituteData.findOne({
      PrimaryEmail: req.body.PrimaryEmail,
    });

    if (!user) {
      const AddUser = {
        Sno: newSno, // Use the newly calculated ID
        InstituteName: req.body.InstituteName,
        HeadName: req.body.HeadName,
        PrimaryEmail: req.body.PrimaryEmail,
        PrimaryContactNumber: req.body.PrimaryContactNumber,
        SecondaryEmail: req.body.SecondaryEmail,
        SecondaryContactNumber: req.body.SecondaryContactNumber,
        Address: req.body.Address,
        City: req.body.City,
        InstituteCode: req.body.InstituteCode,
        InstituteType: req.body.InstituteType,
        AxiosPlans: req.body.AxiosPlans,
        Password: req.body.Password,
      };
      const AdduserDetails = await AddInstituteData.create(AddUser);

      console.log(AdduserDetails);
      res.status(200).send("User created successfully");
    } else {
      res.status(400).json("User with the same email already registered");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});

app.delete("/deleteInstitute/:id", async (req, res) => {
  try {
    const { id } = req.params.id; // Use req.params.id to get the instituteId
    const deletedInstitute = await AddInstituteData.findByIdAndRemove(id);

    if (deletedInstitute) {
      return res.status(200).json("Institute deleted successfully");
    } else {
      return res.status(404).json("Institute not found");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});

// app.delete("/deleteInstitute/:Sno", async (req, res) => {
//   try {
//     const Sno = req.params.Sno; // Use req.params.sno to get the Sno
//     const deletedInstitute = await AddInstituteData.findOneAndRemove({ Sno: Sno });

//     if (deletedInstitute) {
//       return res.status(200).json("Institute deleted successfully");
//     } else {
//       return res.status(404).json("Institute not found");
//     }
//   } catch (e) {
//     console.error(e.message);
//     return res.status(500).json(e.message);
//   }
// });

app.get("/allAddInstitutes", async (req, res) => {
  const allInstitutes = await AddInstituteData.find({});

  return res.json(allInstitutes);
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
