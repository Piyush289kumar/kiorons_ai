import mongoose from 'mongoose'
const userSchema = new mongoose.Schema(
  {
    // Local auth
    email: {
      type: String,
      unique: true,
      sparse: true, // allows null for OAuth users
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
    },
    // Phone-based auth
    phone: {
      type: String,
      unique: true,
      sparse: true, // allows null if email/OAuth is used
    },
    phoneVerified: {
      type: Boolean,
      default: false,
    },
    // OAuth
    oauthProvider: {
      type: String, // e.g., 'google', 'github'
    },
    oauthId: {
      type: String,
      index: true,
    },
    // Common user fields
    name: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String, // URL
    },
    // Roles & permissions
    role: {
      type: String,
      enum: ['user', 'admin', 'moderator'],
      default: 'user',
    },

    isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
    // Account status
    isActive: {
      type: Boolean,
      default: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    // Security / login meta
    lastLogin: Date,
    loginCount: {
      type: Number,
      default: 0,
    },
    // Optional metadata
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
)
export default mongoose.models.User || mongoose.model('User', userSchema)
