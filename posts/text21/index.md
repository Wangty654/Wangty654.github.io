# 路由表




# 路由表

路由表操作

```
ipconfig
```

```
route print
```

```
route delete 0.0.0.0 
route delete 10.163.0.0 
route delete 10.164.0.0 
route delete 10.160.0.0 
route delete 10.1.0.0    

route add -p 0.0.0.0 mask 0.0.0.0 192.168.9.1 metric 20 
route add -p 10.163.0.0 mask 255.255.0.0 192.168.8.1 metric 30  
route add -p 10.164.0.0 mask 255.255.0.0 192.168.8.1 metric 30  
route add -p 10.160.0.0 mask 255.255.0.0 192.168.8.1 metric 30  
route add -p 10.1.0.0 mask 255.255.0.0 192.168.8.1 metric 30
```

