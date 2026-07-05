import { Router } from "express";
import { body, validationResult } from "express-validator";
import Lead from "../models/Lead.js";
import { sendLeadEmail } from "../utils/email.js";

const router = Router();

router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").trim().notEmpty().withMessage("Phone is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const lead = await Lead.create(req.body);

      try {
        await sendLeadEmail(lead);
      } catch (emailErr) {
        console.error("Email send failed:", emailErr.message);
      }

      res.status(201).json({
        success: true,
        message: "Thank you! We'll get back to you within 24 hours.",
      });
    } catch (err) {
      console.error("Lead creation error:", err);
      res.status(500).json({ success: false, message: "Server error. Please try again." });
    }
  }
);

export default router;
