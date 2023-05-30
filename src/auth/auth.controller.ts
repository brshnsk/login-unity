import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiResponse } from '@Nestjs/swagger'
import { User } from './entities/user.entity';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({status: 201, description: 'registration completed', type: User})
  @ApiResponse({status: 400, description: 'Email already used'})
  @ApiResponse({ status: 403, description: 'Forbidden, Token related.'})
  createUser(@Body() createUserDto: CreateUserDto){
    return this.authService.create(createUserDto)
  }

  @Post('login')
  @ApiResponse({status: 201, description: 'login completed', type: User})
  @ApiResponse({status: 400, description: 'property should not exist', type: User})
  @ApiResponse({status: 401, description: 'Email not valid (Unauthorized)', type: User})
  @ApiResponse({status: 403, description: 'Forbidden, Token related.'})


  loginUser(@Body() loginUserDto : LoginUserDto ) {
    return this.authService.login(loginUserDto);
  }

  
}
