import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    try {
      const user = await this.authService.register(name, email, password);
      return { message: 'Usuario registrado correctamente', user };
    } catch (error) {
      throw new HttpException(`Error en el registro: ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }


  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new HttpException('Credenciales incorrectas', HttpStatus.UNAUTHORIZED);
    }
    return { message: 'Inicio de sesión exitoso', user }; 
  }
}
