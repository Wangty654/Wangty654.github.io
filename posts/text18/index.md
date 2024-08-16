# Oracle查询sql




# Oracle查询sql

查询系统当前日期

```sql
select sysdate from dual;
```

请查询每个员工的名字、薪水和加薪15.5%之后的薪水（trunc取整）

```sql
Select 名字,薪水,trunc(薪水*1.155)  "new salary" from employees;
```

请显示所有以’J’，‘A’，'M’打头的员工的名字和名字长度，且按照名字排升序

```sql
select 名字,LENGTH(名字) from employees 
where substr(名字,0,1) in ('J','A','M')  order by 名字 asc;
```

请查询员工名和工作时间（换算成月并取整），并按工作时间排降序

```sql
Select 名,trunc(months_between(sysdate,时间),0)  from employees 
order by trunc(months_between(sysdate,时间),0) desc;
```

请查询员工的名字和薪水，并将薪水列变成15个字符长度，左边填充“$”符号

```sql
select 名字,lpad(薪水,15,'$') from employees;
```

请查询部门id为90的所有员工的名字和他们参加工作的星期数(保留2位小数，不需要四舍五入)使用

```sql
select 名字 , trunc((参加工作星期数)/7,2) from employees where 员工id=90
```

创建报告，显示员工名和奖金系数,如果奖金系数为空,则显示$无奖金

```sql
select 名字,decode(奖金系数,'','无奖金',奖金系数) from employees;
```

请使用case语句，查询员工的job_id和级别.例如:

```sql
select t.job_id, decode(t.job_id,
		'AD_PRES',
		'A','ST_MAN',
		'B','IT_PROG',
		'C','SA_REP',
		'D','ST_CLERK',
		'E','0') 
from employees t;
```

或者

```sql
Select  job_id,
		case job_id
		when 'AD_PRES' then 'A'
		when 'ST_MAN' then 'B'
		when 'IT_PROG' then 'C'
		when 'SA_REP' then 'D'
		when 'ST_CLERK' then 'E'
		else '0' 
		end "Grage" 
		from employees;
```


