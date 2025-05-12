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
      onboarding: {
        startedAt: Date,
        completedAt: Date,
        currentStep: {
          type: String, // one of: 'start', 'collect-role', 'collect-intent', etc.
        },
        stepsCompleted: [String], // list of completed step keys
        status: {
          type: String, // 'not_started' | 'in_progress' | 'completed'
          default: 'not_started',
        },
      },
      role: {
        type: String, // e.g. 'user', 'admin', 'developer'
      },
      intent: {
        type: String, // e.g. 'hire', 'freelance', 'explore'
      },
      preferences: {
        language: String,
        theme: String,
        notifications: Boolean,
        // add more preferences as needed
      },
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
)
export default mongoose.models.User || mongoose.model('User', userSchema)
