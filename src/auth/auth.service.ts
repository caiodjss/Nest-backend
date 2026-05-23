import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../prisma/prisma.service';

import { Profile } from 'passport-google-oauth20';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,

    private jwtService: JwtService,
  ) {}

  async validateGoogleUser(profile: Profile) {
    const user = await this.prisma.user.upsert({
      where: {
        googleId: profile.id,
      },

      update: {
        email: profile.emails?.[0]?.value,

        name: profile.displayName,

        avatar: profile.photos?.[0]?.value,
      },

      create: {
        googleId: profile.id,

        email: profile.emails?.[0]?.value || '',

        name: profile.displayName,

        avatar: profile.photos?.[0]?.value || null,
      },
    });

    const token = this.jwtService.sign({
      userId: user.id,
    });

    return {
      user,
      token,
    };
  }
}
