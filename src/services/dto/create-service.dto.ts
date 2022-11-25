/* eslint-disable prettier/prettier */
import {
  IsCurrency,
  IsNotEmpty,
  Length,
  Min,
  Max,
  Matches,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateServiceDto {
  @IsNotEmpty({ message: 'Campo nome não pode ser vazio' })
  @Length(3, 99, { message: 'Campo nome deve ter entre 3 e 99 caracteres' })
  nome: string;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor mínimo com formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo Valor mínimo não pode ser negativo',
  })
  valorMinimo: number;

  @IsNumber({}, {message: 'Campo quantidade horas deve ser um número'})
  @Min(0, {message: 'Campo quantidade horas deve ser maior ou igual a 0'})
  @Max(10, {message: 'Campo quantidade horas deve ser menor que 10'})
  @Type(() => Number)
  quantidadeHoras: number;

  @IsNumber({}, {message: 'Campo porcentagem deve ser um número'})
  @Min(0, {message: 'Campo porcentagem deve ser maior ou igual a 0'})
  @Max(100, {message: 'Campo porcentagem deve ser menor ou igual a 100'})
  @Type(() => Number)
  porcentagem: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor quarto com formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo Valor quarto não pode ser negativo',
  })
  valorQuarto: number;

  @IsNumber({}, {message: 'Campo horas quarto deve ser um número'})
  @Min(0, {message: 'Campo horas quarto deve ser maior ou igual a 0'})
  @Max(10, {message: 'Campo horas quarto deve ser menor que 10'})
  @Type(() => Number)
  horasQuarto: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor sala com formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo Valor sala não pode ser negativo',
  })
  valorSala: number;

  @IsNumber({}, {message: 'Campo horas sala deve ser um número'})
  @Min(0, {message: 'Campo horas sala deve ser maior ou igual a 0'})
  @Max(10, {message: 'Campo horas sala deve ser menor ou igual a 10'})
  @Type(() => Number)
  horasSala: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor banheiro com formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo Valor banheiro não pode ser negativo',
  })
  valorBanheiro: number;

  @IsNumber({}, {message: 'Campo horas banheiro deve ser um número'})
  @Min(0, {message: 'Campo horas banheiro deve ser maior ou igual a 0'})
  @Max(10, {message: 'Campo horas banheiro deve ser menor ou igual a 10'})
  @Type(() => Number)
  horasBanheiro: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor cozinha com formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo Valor cozinha não pode ser negativo',
  })
  valorCozinha: number;

  @IsNumber({}, {message: 'Campo horas cozinha deve ser um número'})
  @Min(0, {message: 'Campo horas cozinha deve ser maior ou igual a 0'})
  @Max(10, {message: 'Campo horas cozinha deve ser menor ou igual a 10'})
  @Type(() => Number)
  horasCozinha: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor quintal com formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo Valor quintal não pode ser negativo',
  })
  valorQuintal: number;

  @IsNumber({}, {message: 'Campo horas quintal deve ser um número'})
  @Min(0, {message: 'Campo horas quintal deve ser maior ou igual a 0'})
  @Max(10, {message: 'Campo horas quintal deve ser menor ou igual a 10'})
  @Type(() => Number)
  horasQuintal: number;

  @IsCurrency(
    { thousands_separator: '.', decimal_separator: ',' },
    { message: 'Campo valor outros com formato inválido' },
  )
  @Matches(RegExp('^((?![-]).)*$'), {
    message: 'Campo Valor outros não pode ser negativo',
  })
  valorOutros: number;

  @IsNumber({}, {message: 'Campo horas outros deve ser um número'})
  @Min(0, {message: 'Campo horas outros deve ser maior ou igual a 0'})
  @Max(10, {message: 'Campo horas outros deve ser menor ou igual a 10'})
  @Type(() => Number)
  horasOutros: number;

  @IsNotEmpty({message: 'Campo icone não pode ser vazio'})
  icone: string;

  @IsNumber({}, {message: 'Campo posição deve ser um número'})
  @Min(1, {message: 'Campo posição deve ser maior que 0'})
  @Type(() => Number)
  posicao: number;
}
