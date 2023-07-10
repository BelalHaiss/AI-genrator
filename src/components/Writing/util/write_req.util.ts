import { RequestServices, WriteRequestType } from '@/types/request';
import Joi from 'joi';

export const getInitial_state = (
  service: RequestServices,
  defaults?: WriteRequestType
): WriteRequestType => ({
  service: service,
  description: '',
  tone: '',
  numberOfGenerated: 1,
  language: '',
  ...defaults
});

export const writeSchema = Joi.object({
  description: Joi.string().min(4).max(120).required(),
  language: Joi.string().valid('English', 'Arabic').required(),
  numberOfGenerated: Joi.number().min(1).max(4).required(),
  service: Joi.string().required(),
  tone: Joi.string().required(),
  from: Joi.string(),
  to: Joi.string()
});
