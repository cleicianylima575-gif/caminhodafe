const express =
require("express");

const cors =
require("cors");

const path =
require("path");

require("dotenv").config();

const healthRoutes =
require("./routes/health.routes");

const dbRoutes =
require("./routes/db.routes");

const contactRoutes =
require("./routes/contact.routes");

const prayerRoutes =
require("./routes/prayer.routes");

const eventRoutes =
require("./routes/event.routes");

const ministryRoutes =
require("./routes/ministry.routes");

const uploadRoutes =
require("./routes/upload.routes");

const authRoutes =
require("./routes/auth.routes");

const app =
express();

app.use(
  cors()
);

app.use(
  express.json()
);

app.use(
  "/uploads",
  express.static(
    path.join(
      __dirname,
      "../uploads"
    )
  )
);

app.use(
  "/",
  healthRoutes
);

app.use(
  "/",
  dbRoutes
);

app.use(
  "/",
  contactRoutes
);

app.use(
  "/",
  prayerRoutes
);

app.use(
  "/",
  eventRoutes
);

app.use(
  "/",
  ministryRoutes
);

app.use(
  "/",
  uploadRoutes
);

app.use(
  "/",
  authRoutes
);

const PORT =
process.env.PORT || 4000;

app.listen(
  PORT,
  () => {

    console.log(
      `Servidor → http://localhost:${PORT}`
    );

  }
); 