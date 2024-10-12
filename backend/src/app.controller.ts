import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('check-db')
export class AppController {
  constructor(private dataSource: DataSource) {}

  @Get()
  async checkDatabaseConnection() {
    try {
      // Verifica si puedes hacer una consulta simple a la base de datos
      const queryResult = await this.dataSource.query('SELECT 1');
      return { message: 'Conexión a la base de datos exitosa', result: queryResult };
    } catch (error) {
      return { message: 'Error en la conexión a la base de datos', error: error.message };
    }
  }
}
