import { Schema, model, models } from 'mongoose'

const CandidateSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, 'Candidatename is required'],
    },
    party: {
      type: String,
      unique: true,
      required: [true, 'Party is required'],
    },
    votes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Candidate = models.Candidates || model('Candidates', CandidateSchema)

export default Candidate
