import 'package:flutter/material.dart';
import 'package:dashboardapp/screen/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(        
        primarySwatch: Colors.orange,
      ),
      home: const HomeScreen(),
    );
  }
}


