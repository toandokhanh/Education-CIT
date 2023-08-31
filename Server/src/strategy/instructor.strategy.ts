import { Injectable, BadRequestException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from '../user/constant/constant';

@Injectable()
export class InstructorStrategy extends PassportStrategy(Strategy, 'instructor') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        if (payload.role === 'instructor') {
            return { 
                userId: payload.id, 
                email: payload.email, 
                avatart: payload.avatart, 
                fullname: payload.fullname, 
                role: payload.role, 
            };
        }
        throw new BadRequestException('Your role is not suitable', { cause: new Error(), description: 'This function is for instructors' });
    }
}