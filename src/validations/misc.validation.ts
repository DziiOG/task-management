import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi'
import * as Joi from 'joi'

@JoiSchemaOptions({
  allowUnknown: false
})
export class MiscDto {
  @JoiSchema(Joi.string().required())
  id: string
}
