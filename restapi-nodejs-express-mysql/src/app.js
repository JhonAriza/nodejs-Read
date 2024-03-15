import express from "express";
import morgan from "morgan";
// Routes
import empleadoRoutes from "./routes/empleado.routes";
import solicitudRoutes from "./routes/solicitud.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/empleados", empleadoRoutes);
app.use("/api/solicituds", solicitudRoutes);
export default app;
